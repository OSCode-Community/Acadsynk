
			const scriptURL = 'https://script.google.com/macros/s/AKfycbwyanW5RAUjZBfmJgWLC_FUJnZhyeT2UuZsEl__ikd3PCpCEYswWwRcY0YvF-ybo6qnBQ/exec'
			const form = document.forms['contact']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! We will get back to you soon." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
