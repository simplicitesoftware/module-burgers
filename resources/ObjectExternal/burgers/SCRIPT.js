if (typeof burgers === 'undefined') burgers = (function($) {
	var app, cus, exc, brg, ing, i, j;

	function updateExclusions(cbk) {
		exc.search(function() {
			cus._exclusions = exc.list;
			for (i = 0; i < cus._ingredients.length; i++) {
				delete cus._ingredients[i]._checked;
				delete cus._ingredients[i]._excid;
				for (j = 0; j < cus._exclusions.length; j++) {
					if (cus._exclusions[j].brgExclusionIngredientId == cus._ingredients[i].row_id) {
						cus._ingredients[i]._checked = " checked";
						cus._ingredients[i]._excid = cus._exclusions[j].row_id;
					}
				}
			}
			cbk && cbk();
		}, { brgExclusionCustomerId: cus.item.row_id });
	}

	function getExclusionId(ingId) {
		for (i = 0; i < cus._ingredients.length; i++)
			if (cus._ingredients[i].row_id == ingId)
				return cus._ingredients[i]._excid;
	}

	function customerSave() {
		cus.item.brgCustomerPhone = $('#customer-phone').val();
		cus.item.brgCustomerFirstname = $('#customer-firstname').val();
		cus.item.brgCustomerLastname = $('#customer-lastname').val();
		console.log(cus.item);
		cus.save(function() { console.log("Customer saved"); });
	}
	
	function customerDialog(cusId) {
		if (!cus._ingredients) {
			ing.search(function() {
				cus._ingredients = ing.list;
				customerDialog(cusId);
			});
		} else {
			if (cusId) {
				cus.get(function() { updateExclusions(customerDialog); }, cusId);
			} else {
				var t = $(Mustache.render($('#customer-template').html(), cus));
				t.find('input[type="checkbox"]').change(function(evt) {
					var cb = $(this);
					var ingId = cb.data('id');
					var excId = getExclusionId(ingId);
					//console.log(ingId + " " + excId + " " + cb[0].checked);
					if (cb[0].checked)
						exc.save(function() { updateExclusions(function() { console.log("Exclusion created"); }); }, { brgExclusionCustomerId: cus.item.row_id, brgExclusionIngredientId: ingId });
					else
						exc.del(function() { updateExclusions(function() { console.log("Exclusion deleted"); }); }, excId);
				});
				t.find('input[type="text"]').change(customerSave);
				bootbox.dialog({ title: "Coordonnées et préférences", message: t });
			}
		}
	}
	
	function orderDialog() {
		var burger = brg.getItem($(this).data('id'));
		bootbox.dialog({
			title: "Commander un &quot;" + burger.brgBurgerName + "&quot;",
			message: Mustache.render($('#order-template').html(), burger),
			buttons: {
				confirm: { label: 'Commander', className: 'btn-success', callback: function() {
					var ord = app.getBusinessObject('BRGOrder');
					ord.item.brgOrderBurgerId = burger.row_id;
					ord.item.brgOrderCustomerId = cus.item.row_id;
					ord.create(function() {
						bootbox.alert({ title: 'Confirmation', message: 'Merci ! Votre burger &quot;' + burger.brgBurgerName + '&quot; a bien été commandé' });
					}, null, { error: function(err) {
						bootbox.alert({ title: 'Erreur', message: $("<pre/>").append(app.getErrorMessage(err)) });
					}});
				}},
				cancel: { label: 'Annuler', className: 'btn-danger' }
			}
		});
	}
	
	function render(root, pub, banner) {
		app = new Simplicite.Ajax(root, 'api', 'burgers', 'simplicite');
		cus = app.getBusinessObject('BrgCustomer');
		exc = app.getBusinessObject('BrgExclusion');
		brg = app.getBusinessObject('BrgBurger');
		ing = app.getBusinessObject('BrgIngredient');
		brg.toFixed = function() { return function(n, r) { return parseFloat(r(n)).toFixed(2); } };
		brg.bannerURL = banner;
		brg.search(function() {
			$('#burgers').html(Mustache.render($('#burgers-template').html(), brg));
			$('#burgers-list').find('button').click(orderDialog);
			$('#customer').click(function(evt) { customerDialog(); }); // ZZZ must enclose in function ZZZ
			customerDialog("1");
		}, null, { inlineDocs: true });
	}

	return { render: render }
})(jQuery);