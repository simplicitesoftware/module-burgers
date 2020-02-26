BrgOrder.preValidate = function() {
	// Ingrédients du burger
	var c = this.getGrant().getTmpObject("BrgComposition");
	c.resetFilters();
	c.getField("brgCompositionBurgerId").setFilter(this.getFieldValue("brgOrderBurgerId"));
	var compositions = c.search();
	
	// Exclusions du client
	var e = this.getGrant().getTmpObject("BrgExclusion");
	e.resetFilters();
	e.getField("brgExclusionCustomerId").setFilter(this.getFieldValue("brgOrderCustomerId"));
	var exclusions = e.search();
	
	// Composition du burger commandé = ingrédients du burger - exclusions du client
	var burgerComposition = "";
	for (var i = 0; i < compositions.size(); i++) {
		var ingredient =  compositions.get(i)[c.getFieldIndex("brgCompositionIngredientId.brgIngredientName")];
		var t = false;
		for (var j = 0; j < exclusions.size(); j++)
			if (ingredient == exclusions.get(j)[e.getFieldIndex("brgExclusionIngredientId.brgIngredientName")]) t = true;
		if (!t) burgerComposition += "\n- " + ingredient;
	}
	this.setFieldValue("brgOrderComposition", burgerComposition);
};