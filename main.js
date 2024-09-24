function send(event){
     
    var nama = document.getElementById('nama');
    var email = document.getElementById('email');       
    var inp = document.getElementById('inp');
    
    var gabungan = '' + 'Nama : ' + nama.value + '%0AEmail : ' + email.value + '%0APesan : ' + inp.value;
   
    var token = '7625272716:AAFUgzs3VnPIWDQmZgFo7rW_4RXErLD55nU'; 
    var grup = '6713042355'; 

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
        nama.value = ""
        email.value = ""
        inp.value = ""
    setTimeout(function(){
   
    },);}});};