$(document).ready(function () {
    $("#delete_header").click(function () {
        $('#username').val("");
        $('#date').val("");
        $('#url').val("");
    });
    $("#delete_brand").click(function () {
        $("#za_brand").empty();
        drug_brand_variable = "";
        brand_counter = 0;
    });
    $("#delete_generic").click(function () {
        $("#za_generic").empty();
        drug_generic_variable = "";
        generic_counter = 0;
    });
    $("#delete_age").click(function () {
        $("#typeahead_age").val("");
        age = 0;
    });
    $("#delete_condition").click(function () {
        $("#za_condition").empty();
        condition_variable = [];
    });
    $("#delete_condition_ppi").click(function () {
        $("#za_condition_ppi").empty();
        condition_variable_ppi = [];
    });
    $("#delete_side").click(function () {
        $("#za_sides").empty();
        side_effects_variable = [];
    });
    $("#delete_nutrient").click(function () {
        $("#za_nutrient").empty();
        nutrient_deficiency = [];
    });
    $("#delete_dosage").click(function () {
        $("#za_dosage").empty();
        dosage_variable = 0;
        dosage_counter = 0;
    });
    $("#delete_duration").click(function () {
        $("#za_duration").empty();
        duration_treatment = 0;
        duration_counter = 0;
    });
    $("#delete_other").click(function () {
        $("#za_other").empty();
        other_drugs = [];

    });
    $("#delete_used").click(function () {
        $("#za_used").empty();
        used_to_take = [];

    });
    $("#delete_natural").click(function () {
        $("#za_natural").empty();

        $("#typeahead_natural").val("");
        natural = [];
        //uncheck checkboxes in this region, do this for duration as well and others related for checkboxes
    });
});