//your JS code here. If required.
let btn = document.getElementById("btn");

btn.addEventListener("click", (e)=>{
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;
	return new Promise((res, rej)=>{		
		setTimeout(()=>{
			console.log("timeout");
			if(age > 18)	
				
			      res(`Welcome, ${name}. You can vote.`); 				
		   else			
			      rej(`Oh sorry ${name}. You aren't old enough`);	
	}, 4000) ;  
	       })
		.then(mes=>{			
	           alert(mes);	
			  
         })
		.catch(err=>{
	         alert(err);
            });		
})
	
	
		