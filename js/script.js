'use strict';

{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');


    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');


    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);


    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');



  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorsSelector = '.post-author',
    optTitleListSelector = '.titles';

  const generateTitleLinks = function(customSelector = ''){
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    for(let article of articles){
      console.log(article);
    }

    let html = '';

    for(let article of articles){

      /* get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);


      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert link into html variable */
      html = html + linkHTML;
      console.log('', html);
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();


  const generateTags = function(){
    console.log(generateTitleLinks);
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles) {
      console.log(article);
    }


    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find tags wrapper */
      const tagsList = article.querySelector(optArticleTagsSelector);


      /* make html variable with empty string */
      let html = '';


      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');


      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(tag);

        /* generate HTML of the link */
        const linkHTML = '<li><a href="#' + tagsList + '"><span>' + tag + '</span></a></li>';

        /* add generated code to html variable */
        html = html + linkHTML;
      }


      /* END LOOP: for each tag */
    }

    /* END LOOP: for every article: */
  };

  generateTags();

  const tagClickHandler = function(event){
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each active tag link */
    for(let activeLink of activeLinks){
      /* remove class active */
      activeLink.classList.remove('active');


      /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
      /* add class active */
      tagLink.classList.add('active');

      /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function(){

    /* find all links to tags */
    const links = document.querySelectorAll('.post-tags a, .list.tags a');

    /* START LOOP: for each link */
    for(let link of links) {

      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);

      /* END LOOP: for each link */
    }
  };

  addClickListenersToTags();


  const generateAuthors = function(){
    console.log(generateAuthors);
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles) {
      console.log(article);
    }

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find authors wrapper */
      const authorsList = article.querySelector(optArticleAuthorsSelector);

      let html = '';

      /* get authors from data-author attribute */
      const articleAuthors = article.getAttribute('data-author');

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#author' + authorsList + '"><span>' + articleAuthors + '</span></a></li>';

      /* add generated code to html variable */
      html = html + linkHTML;

      /* insert HTML of all the links into the author wrapper */

    }

  };

  generateAuthors();

  const authorClickHandler = function(event){
    console.log(authorClickHandler);

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('author was cliked');

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "author" and extract tag from the "href" constant */
    const author = href.replace('#author-', '');

    /* find all author links with class active */
    const activeLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each active tag link */
    for (let activeLink of activeLinks){
      console.log(activeLink);

      /* remove class active */
      activeLink.classList.remove('active');

    /* END LOOP: for each active tag link */
    }

    /* find all author links with "href" attribute equal to the "href" constant */
    const authorLinks = document.querySelectorAll('a[href = "' + href + '"]');

    /* START LOOP: for each found author link */
    for (let authorLink of authorLinks){
      console.log(authorLink);

      /* add class active */
      authorLink.classList.add('active');

      /* END LOOP: for each found author link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');
  };

  const addClickListenersToAuthors = function(){

    /* find all links to author */
    const links = document.querySelectorAll('.post-author a, .lists.authors a');

    /* START LOOP: for each link */
    for(let link of links) {

      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);

    /* END LOOP: for each link */
    }
  };

  addClickListenersToAuthors();
}
