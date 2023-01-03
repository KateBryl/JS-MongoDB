$(function () {

    //Додавання нового студенту -----------------------------------------------
    $("#btnSave").click( function () {
        let frm = $('#frmStudent');
        if ( !frm.form('enableValidation').form('validate') ) return; 

        let student = {
            Name: $('#stud_sname').val(),
            ProgLang: $('#prog_lang').val(),
            DataBase: $('#data_base').val()
          };

        $.ajax({
            url: "http://localhost:7000/api/posts",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(student),

            async: false,
            success: function(response){
                console.log( JSON.stringify(response));
                getAllRecords();
                },
            error:   function(msg){ 
                console.log( JSON.stringify(msg));
            }
        });
    
    });

    //Редагування студенту-----------------------------------------------------
    $("#btnEdit").click( function () {
        let frm = $('#frmStudent');
        if ( !frm.form('enableValidation').form('validate') ) return; 

        let student = {
            _id: $('#id_stud').val(),
            Name: $('#stud_sname').val(),
            ProgLang: $('#prog_lang').val(),
            DataBase: $('#data_base').val()
          };

        $.ajax({
            url: "http://localhost:7000/api/posts",
            method: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(student),
            async: false,
            success: function(response){
                console.log( JSON.stringify(response));
                getAllRecords();
                },
            error:   function(msg){ 
                console.log( JSON.stringify(msg));
            }
        });
    
    });

    //Вилучення запису з БД ---------------------------------------------------
    $("#btnDelete").click( function () {
        $.ajax({
            url: "http://localhost:7000/api/posts/" + $('#id_stud').val(),
            method: "DELETE",
            contentType: 'application/json',
            async: false,
            success: function(response){
                console.log( JSON.stringify(response));
                getAllRecords();
                },
            error:   function(msg){ 
                console.log( JSON.stringify(msg));
            }
        });
    });

    //Очищення таблиці з результатами -----------------------------------------
    $("#btnClear").click( function () {
        $('#tblStudent tbody').remove();
    });

    //Метод отримання всіх записів з БД ---------------------------------------
    $("#btnGetAll").click( function () {
        getAllRecords();
    });
});

//-----------------------------------------------------------------------------
//Метод отримання всіх записів з БД 
//-----------------------------------------------------------------------------
function getAllRecords() {
    $.ajax({
        url: "http://localhost:7000/api/posts",
        async: false,
        success: function(response){
            //Очищення таблицю перед заповненням
            $('#tblStudent tbody').remove();
            $('#tblStudent').append('<tbody></tbody>'); 
            //Заповнення таблиці результатами.            
            let strtbl = "";
            let row;
            for ( i in response) {
                row = response[i];
                strtbl = '<tr>';
                strtbl += '<td>' + row._id + '</td>';
                strtbl += '<td>' + row.Name + '</td>';
                strtbl += '<td>' + row.ProgLang + '</td>';
                strtbl += '<td>' + row.DataBase + '</td>';
                strtbl += '</tr>';
                $('#tblStudent > tbody:first').append(strtbl); 
                }

            $("#tblStudent tr").on("dblclick", function () {
                $('#id_stud').textbox('setValue', $(this).find('td:eq(0)').text() );
                $('#stud_sname').textbox('setValue', $(this).find('td:eq(1)').text() );
                $('#prog_lang').textbox('setValue', $(this).find('td:eq(2)').text() );
                $('#data_base').textbox('setValue', $(this).find('td:eq(3)').text() );
            });

            },
        error:   function(msg){ 
            console.log( JSON.stringify(msg));
        }
    });
}