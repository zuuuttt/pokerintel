$(document).ready(function(){
    $("#submit").click(function(){
        
        var username = $("#firstname").val();
        var fullname = $("#fullname").val();
        
        var valid = true;
        
        if(username == "" || !isNameValid(username)){
            valid = false;
            $("#errorUsername").html("Username Field Cannot Be Blank and Must Be Between 7 and 15 Characters");
        }else{
            $("#errorUsername").html("");
        }
        
        if(fullname == "" || !isNameValid(fullname)){
            valid = false;
            $("#errorFullname").html("Fullname Field Cannot Be Blank and Must Be Between 7 and 15 Characters");
        }else{
            $("#errorFullname").html("");
        }
        
        /*if(valid == true){
            var form_data = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            };
            
            $.ajax({
                url: "../scripts/insert.php",
                type: "POST",
                data: form_data,
                success: function(data){
                    
                }
            });
            
        }else{
            return false;
        }*/
        
    });
});

function isNameValid(name){
    return /[A-Z]+/i.test(name) && /[a-z]+/.test(name) && /\S{5,15}/.test(name);
}