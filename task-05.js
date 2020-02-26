"use strict";

const checkForSpam = function(message) {
    const arrayForCheck = message.split(' ');
    console.log(arrayForCheck.includes('spam') || arrayForCheck.includes('sale'));
};

checkForSpam('Latest technology news'); 
checkForSpam('JavaScript weekly newsletter'); 
checkForSpam('Get best sale offers now!'); 
checkForSpam('[SPAM] How to earn fast money?'); 