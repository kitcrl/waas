function nDatePicker(obj)
{
	$.datepicker.regional['kr'] = {
		dateFormat: "yymmdd",
		changeMonth: true, 
		changeYear: true,
		monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		showMonthAfterYear: true,
		// nextText: '���� ��',
		// prevText: '���� ��', 
		// dayNames: ['�Ͽ���', '������', 'ȭ����', '������', '�����', '�ݿ���', '�����'],
		// dayNamesMin: ['��', '��', 'ȭ', '��', '��', '��', '��'], 
		// monthNamesShort: ['1��','2��','3��','4��','5��','6��','7��','8��','9��','10��','11��','12��'],
		// monthNames: ['1��','2��','3��','4��','5��','6��','7��','8��','9��','10��','11��','12��'],
		// yearSuffix: '��'
	};

	$.datepicker.setDefaults($.datepicker.regional['kr']);


	$(obj).datepicker({
	}).datepicker("show");
}



