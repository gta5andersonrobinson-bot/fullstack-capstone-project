fetch(url, {
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}` 
    }
})
