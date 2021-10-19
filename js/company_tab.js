var companyArray = document.querySelectorAll('.companies');
console.log(companyArray)
Array.from(companyArray).forEach(function(company) {
    company.addEventListener('click', function(){
        //var innercontent = 
        //var currentShowEl = document.querySelectorAll('.show');
        var currentShowEl = document.querySelectorAll('.companies.show');

        if(company.classList.contains('show')) {
            company.classList.remove('show');
            console.log('it already has show')
            console.log(company.classList)
        } else if (!company.classList.contains("show")) {
            company.classList.add('show');
            console.log('it doesnt have show')
            console.log(company)
        }
        //remove class show off any elements after
        Array.from(currentShowEl).forEach( showEl => {
            if (showEl.classList.contains('show')) {
                showEl.classList.remove('show');
            }
        });
    });
},true/false);