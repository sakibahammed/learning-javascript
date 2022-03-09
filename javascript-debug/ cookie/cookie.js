/* 
Read this article 

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies



*/



const getCookie = name =>{
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');

    const findCookie = allCookie.find(c => c.includes(name));
    if(findCookie){
        'country = US'
        const cookieName = findCookie.split('=');
        return cookieNameValue;
    }
}