
if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '�������';
	$.fn.pagination.defaults.afterPageText = '� {pages}';
	$.fn.pagination.defaults.displayMsg = '�������� {from} �� {to} � {total} ������';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = '������������, ���� ����� ������� ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = '��';
	$.messager.defaults.cancel = '�������';
}
$.map(['validatebox','textbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = '�� ���� ��������� ���������!';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message  = '���� �����, ������ �������� e-mail ������.';
	$.fn.validatebox.defaults.rules.url.message    = '���� �����, ������ ��������� URL.';
	$.fn.validatebox.defaults.rules.length.message = '���� �����, ������ ������� � �������� {0} �� {1}.';
	$.fn.validatebox.defaults.rules.remote.message = '���� ����� �������� �� ����.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.firstDay = 1;
	$.fn.calendar.defaults.weeks  = ['�','�','�','�','�','�','�'];
	$.fn.calendar.defaults.months = ['ѳ�', '���', '���', '���', '����', '���', '���', '���', '���', '���', '���', '����'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = '�������';
	$.fn.datebox.defaults.closeText = '�������';
	$.fn.datebox.defaults.okText = '��';
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
