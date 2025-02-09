//section customize your workflow
const getCustomizeWorkflow= document.querySelector('#tag-1');

const getEasyOnBoarding= document.querySelector('#tag-2');
const getImprove= document.querySelector('#tag-3');
const imageOfSection=document.querySelector('.image img');
console.log(imageOfSection);

getCustomizeWorkflow.addEventListener('click',()=>{
    imageOfSection.src=`./asset/custom1.webp`;
    getEasyOnBoarding.style.backgroundColor=`#F1FAFF`;
    getImprove.style.backgroundColor=`#F1FAFF`;
    getCustomizeWorkflow.style.backgroundColor=`white`;
    //solution: using add and remove class to modifiy the background color, now the background color is has the most specify of css
}
)
getEasyOnBoarding.addEventListener('click',()=>{
    imageOfSection.src=`./asset/custom2.webp`;
    getCustomizeWorkflow.style.backgroundColor=`#F1FAFF`;
    getImprove.style.backgroundColor=`#F1FAFF`;
    getEasyOnBoarding.style.backgroundColor=`white`;
}
)
getImprove.addEventListener('click',()=>{
    imageOfSection.src=`./asset/custom3.webp`;
    getCustomizeWorkflow.style.backgroundColor=`#F1FAFF`;
    getEasyOnBoarding.style.backgroundColor=`#F1FAFF`;
    getImprove.style.backgroundColor=`white`;
    
}
)


//section: what people are saying
const getFirstReview=document.querySelector('#review-1');
const getSecondReview=document.querySelector('#review-2');
const getThirdReview=document.querySelector('#review-3');
const getFirstReviewContent=getFirstReview.querySelector('.content');
const getSecondReviewContent=getSecondReview.querySelector('.content');
const getThirdReviewContent=getThirdReview.querySelector('.content');

getFirstReview.addEventListener('click',
    ()=>{
        getFirstReviewContent.style.display='flex';
        getSecondReviewContent.style.display='none';
        getThirdReviewContent.style.display='none';
    }
)
getSecondReview.addEventListener('click',
    ()=>{
        getFirstReviewContent.style.display='none';
        getSecondReviewContent.style.display='flex';
        getThirdReviewContent.style.display='none';
    }
)
getThirdReview.addEventListener('click',
    ()=>{
        getFirstReviewContent.style.display='none';
        getSecondReviewContent.style.display='none';
        getThirdReviewContent.style.display='flex';
    }
)