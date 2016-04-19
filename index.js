'use strict';

$(document).ready(function () {






  var imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-01/73b5589136dc9a9feef8960252255d25.png";

  imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-11/ced211621f32382d33096dde5f0644ac.png";





  $('#twitter1').on('click',function (e){
    e.preventDefault();
    console.log("twitter1");

OAuth.initialize('-wTpkEkqzYX2b5EcW8-2pYzKuC0')
// OAuth.popup('twitter').done(function(result) {
//     console.log(result)
//     // do some stuff with result
// })
    // Initialize the SDK
    // OAuth.initialize('-wTpkEkqzYX2b5EcW8-2pYzKuC0');


    //Example with Twitter with the cache option enabled
    OAuth.popup('twitter', {cache: true}).done(function(twitter) {
      //make API calls with `twitter`
      console.log("passed");
        console.log(twitter);
    }).fail(function(err) {
      //todo when the OAuth flow failed
      console.log("failed:   "+ err);
    });


  });


  $('#twitter2').on('click',function (e){
    e.preventDefault();
    console.log("twitter2");

  });

  $('#twitter3').on('click',function (e){
    e.preventDefault();
    console.log("twitter3");
    window.location.href = "http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkutter-001.s3.amazonaws.com%2F2016-04-11%2Fced211621f32382d33096dde5f0644ac.png"
  });


});
