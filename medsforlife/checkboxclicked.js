$(document).ready(function () {
    $('#duration_day').change(function () {
        
        if (!$(this).is(':checked')) {
            duration_checkbox = "1unknown";

        }
        else {
            duration_checkbox = "2day";
        }
        $('#duration_day').attr('checked', true);
        $('#duration_week').attr('checked', false);
        $('#duration_month').attr('checked', false);
        $('#duration_year').attr('checked', false);
        $('#duration_notspecified').attr('checked', false);
    });
    $('#duration_week').change(function () {
        if (!$(this).is(':checked')) {
            duration_checkbox = "1unknown";
        }
        else {
            duration_checkbox = "3week";
        }
        $('#duration_day').attr('checked', false);
        $('#duration_week').attr('checked', true);
      
    });
    $('#duration_month').change(function () {
        if (!$(this).is(':checked')) {
            duration_checkbox = "1unknown";
        }
        else {
            duration_checkbox = "4month";
        }
        $('#duration_day').attr('checked', false);
        $('#duration_week').attr('checked', false);
        $('#duration_month').attr('checked', true);
        $('#duration_year').attr('checked', false);
        $('#duration_notspecified').attr('checked', false);
    });
    $('#duration_year').change(function () {
        if (!$(this).is(':checked')) {
            duration_checkbox = "1unknown";
        }
        else {
            duration_checkbox = "5year";
        }
        $('#duration_day').attr('checked', false);
        $('#duration_week').attr('checked', false);
        $('#duration_month').attr('checked', false);
        $('#duration_year').attr('checked', true);
        $('#duration_notspecified').attr('checked', false);
    });
    $('#duration_notspecified').change(function () {
        if (!$(this).is(':checked')) {
            duration_checkbox = "1unknown";
        }
        $('#duration_day').attr('checked', false);
        $('#duration_week').attr('checked', false);
        $('#duration_month').attr('checked', false);
        $('#duration_year').attr('checked', false);
        $('#duration_notspecified').attr('checked', true);
       
    });
    //---------------------------------------------------------
    $('#daily_yes').change(function () {
        if (!$(this).is(':checked')) {
            daily_checkbox = "unknown";
        }
        else {
            daily_checkbox = "yes";
        }
        $('#daily_yes').attr('checked', true);
        $('#daily_no').attr('checked', false);
        $('#daily_onandoff').attr('checked', false);
        $('#daily_fewaweek').attr('checked', false);
        $('#daily_fewamonth').attr('checked', false);
        $('#daily_unknown').attr('checked', false);
    });
    $('#daily_no').change(function () {
        if (!$(this).is(':checked')) {
            daily_checkbox = "unknown";
        }
        else {
            daily_checkbox = "no";
        }
        $('#daily_yes').attr('checked', false);
        $('#daily_no').attr('checked', true);
        $('#daily_onandoff').attr('checked', false);
        $('#daily_fewaweek').attr('checked', false);
        $('#daily_fewamonth').attr('checked', false);
        $('#daily_unknown').attr('checked', false);
    });
    $('#daily_onandoff').change(function () {
        if (!$(this).is(':checked')) {
            daily_checkbox = "unknown";
        }
        else {
            daily_checkbox = "onoff";
        }
        $('#daily_yes').attr('checked', false);
        $('#daily_no').attr('checked', false);
        $('#daily_onandoff').attr('checked', true);
        $('#daily_fewaweek').attr('checked', false);
        $('#daily_fewamonth').attr('checked', false);
        $('#daily_unknown').attr('checked', false);
    });
    $('#daily_fewaweek').change(function () {
        if (!$(this).is(':checked')) {
            daily_checkbox = "unknown";
        }
        else {
            daily_checkbox = "fewaweek";
        }
        $('#daily_yes').attr('checked', false);
        $('#daily_no').attr('checked', false);
        $('#daily_onandoff').attr('checked', false);
        $('#daily_fewaweek').attr('checked', true);
        $('#daily_fewamonth').attr('checked', false);
        $('#daily_unknown').attr('checked', false);
    });
    $('#daily_fewamonth').change(function () {
        if (!$(this).is(':checked')) {
            daily_checkbox = "unknown";
        }
        else {
            daily_checkbox = "fewamonth";
        }
        $('#daily_yes').attr('checked', false);
        $('#daily_no').attr('checked', false);
        $('#daily_onandoff').attr('checked', false);
        $('#daily_fewaweek').attr('checked', false);
        $('#daily_fewamonth').attr('checked', true);
        $('#daily_unknown').attr('checked', false);
    });
    $('#daily_unknown').change(function () {
        if (!$(this).is(':checked')) {
            daily_checkbox = "unknown";
        }
        else {
            daily_checkbox = "unknown";
        }
        $('#daily_yes').attr('checked', false);
        $('#daily_no').attr('checked', false);
        $('#daily_onandoff').attr('checked', false);
        $('#daily_fewaweek').attr('checked', false);
        $('#daily_fewamonth').attr('checked', false);
        $('#daily_unknown').attr('checked', true);
    });
    //---------------------------------------------------------

    $('#sex_male').change(function () {
        if (!$(this).is(':checked')) {
            sex_checkbox = "unknown";
        }
        else {
            sex_checkbox = "M";
        }
        $('#sex_male').attr('checked', true);
        $('#sex_female').attr('checked', false);
       
    });
    $('#sex_female').change(function () {
        if (!$(this).is(':checked')) {
            sex_checkbox = "unknown";
        }
        else {
            sex_checkbox = "F";
        }
        $('#sex_male').attr('checked', false);
        $('#sex_female').attr('checked', true);
       
    });
    //---------------------------------------------------------
    $('#hpylori_yes').change(function () {
        if (!$(this).is(':checked')) {
            hpylori_checkbox = "unknown";
        }
        else {
            hpylori_checkbox = "yes";
        }
        $('#hpylori_yes').attr('checked', true);
        $('#hpylori_no').attr('checked', false);
        $('#hpylori_unknown').attr('checked', false);
       
    });
    $('#hpylori_no').change(function () {
        if (!$(this).is(':checked')) {
            hpylori_checkbox = "unknown";
        }
        else {
            hpylori_checkbox = "no";
        }
        $('#hpylori_yes').attr('checked', false);
        $('#hpylori_no').attr('checked', true);
        $('#hpylori_unknown').attr('checked', false);
      
    });
    $('#hpylori_unknown').change(function () {
        if (!$(this).is(':checked')) {
            hpylori_checkbox = "unknown";
        }
        else {
            hpylori_checkbox = "unknown";
        }
        $('#hpylori_yes').attr('checked', false);
        $('#hpylori_no').attr('checked', false);
        $('#hpylori_unknown').attr('checked', true);
       
    });
    //---------------------------------------------------------
    $('#natural_helped').change(function () {
        if (!$(this).is(':checked')) {
           
           
        }
        $('#natural_helped').attr('checked', true);
        $('#natural_nothelped').attr('checked', false);
        $('#natural_littlehelped').attr('checked', false);
        $('#natural_unknown').attr('checked', false);
    });
    $('#natural_nothelped').change(function () {
        if (!$(this).is(':checked')) {
           
        }
        $('#natural_helped').attr('checked', false);
        $('#natural_nothelped').attr('checked', true);
        $('#natural_littlehelped').attr('checked', false);
        $('#natural_unknown').attr('checked', false);
    });
    $('#natural_littlehelped').change(function () {
        if (!$(this).is(':checked')) {
            
        }
        $('#natural_helped').attr('checked', false);
        $('#natural_nothelped').attr('checked', false);
        $('#natural_littlehelped').attr('checked', true);
        $('#natural_unknown').attr('checked', false);
    });
    $('#natural_unknown').change(function () {
        if (!$(this).is(':checked')) {
            
        }
        $('#natural_helped').attr('checked', false);
        $('#natural_nothelped').attr('checked', false);
        $('#natural_littlehelped').attr('checked', false);
        $('#natural_unknown').attr('checked', true);
    });
       
});