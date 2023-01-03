
if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Сторінка';
	$.fn.pagination.defaults.afterPageText = 'з {pages}';
	$.fn.pagination.defaults.displayMsg = 'Перегляд {from} до {to} з {total} записів';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Обробляється, будь ласка чекайте ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'Ок';
	$.messager.defaults.cancel = 'Закрити';
}
$.map(['validatebox','textbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = 'Це поле необхідно заповнити!';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message  = 'Будь ласка, введіть коректну e-mail адресу.';
	$.fn.validatebox.defaults.rules.url.message    = 'Будь ласка, введіть коректний URL.';
	$.fn.validatebox.defaults.rules.length.message = 'Будь ласка, введіть зачение у інтервалі {0} та {1}.';
	$.fn.validatebox.defaults.rules.remote.message = 'Будь ласка виправте це поле.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.firstDay = 1;
	$.fn.calendar.defaults.weeks  = ['Н','П','В','С','Ч','П','С'];
	$.fn.calendar.defaults.months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Груд'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Сьогодні';
	$.fn.datebox.defaults.closeText = 'Закрити';
	$.fn.datebox.defaults.okText = 'Ок';
    $.fn.datebox.defaults.formatter = function(date){
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        return (d<10?('0'+d):d)+'.'+(m<10?('0'+m):m)+'.'+y;
        };
    $.fn.datebox.defaults.parser = function(s){
        if (!s) return new Date();
        var ss = (s.split('.'));
        var d = parseInt(ss[0],10);
        var m = parseInt(ss[1],10);
        var y = parseInt(ss[2],10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d))
            return new Date(y,m-1,d);
        else 
            return new Date();
        };
}

if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText
	});
}
