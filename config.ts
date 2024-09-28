
export const defaultLocale:()=>string= ()=>{
    if (typeof window !== 'undefined' &&localStorage.getItem("language")) {
      const languageSet:string=JSON.stringify(localStorage.getItem("language"));
      return languageSet
    }else{
      return ""
    }
  }
  