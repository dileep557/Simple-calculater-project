function insert(num){


    document.form.textview.value=document.form.textview.value+num;
  }
  
  function equals(){
    var txt=document.form.textview.value;
    try{
      document.form.textview.value=eval(txt);
    }
    catch(error){
      document.form.textview.value=eval("error");
    }
      
  }
  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }