** SFRA inbuild API calls and passing back values to render


1. Pass PID as parameter
2. Use ProductMgr API class and getProduct method, examine the output returned by API.
3. Create a new ISML page and pass product object got from pipelet and display any product’s attribute on page. (Hitting URL will be CustomProduct-Show?PID=1234)
 

https://sanbox.net/on/demandware.store/Sites-RefArch-Site/en_US/CustomProduct-Show?PID=25553387M


<p>JSON.stringify(${pdict.fullProdDetails})</p>
