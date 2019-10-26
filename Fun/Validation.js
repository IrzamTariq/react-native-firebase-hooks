export const Validation = (text,type)=>{
    // return"ASSDDDD"
    if(type=='FirstName')
    {
        alph=/^[A-Za-z]+$/
      if(alph.test(text))
      {
          return text;
      }
      else
      {
          return false; 
      }
    }

   else if(type=='PhoneNumber')
    {
        alph=/^[0-9]+$/
      if(alph.test(text))
      {
          if(text.length==11)
          return text;
          else
          return false;
      }
      else
      {
          return false; 
      }
    }
    else if(type=='Email')
    {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(reg.test(text))
      {
          return text;
      }
      else
      {
          return false; 
      }
    }
    else if(type=='Check')
    {
        return text;
    }
}