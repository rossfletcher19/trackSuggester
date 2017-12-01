$(document).ready(function() {
  $("form#questionaire").submit(function(event) {
    event.preventDefault();
    var interactivWeb = $("input:radio[name=1]:checked").val();
    var simplistic = $("input:radio[name=2]:checked").val();
    var beAndWebApps = $("input:radio[name=3]:checked").val();
    var androidApps = $("input:radio[name=4]:checked").val();
    var beMostPopular = $("input:radio[name=5]:checked").val();
    var beBlogsCorpGov = $("input:radio[name=6]:checked").val();


    if (interactivWeb === "yes") {
      $(".keepCalm").hide();
      $(".rubyRails").fadeIn();
    } else if (interactivWeb === "no" && simplistic === "yes") {
      $(".keepCalm").hide();
      $(".rubyRails").fadeIn();
    } else if (simplistic === "no" && beAndWebApps === "yes") {
      $(".keepCalm").hide();
      $(".javaAndroid").fadeIn();
      $(".rubyRails").hide();
      $(".phpDrupal").hide();
    } else if (beAndWebApps === "no" && androidApps === "yes") {
      $(".keepCalm").hide();
      $(".javaAndroid").fadeIn();
      $(".rubyRails").hide();
      $(".phpDrupal").hide();
    } else if (androidApps === "no" && beMostPopular === "yes") {
      $(".keepCalm").hide();
      $(".phpDrupal").fadeIn();
      $(".javaAndroid").hide();
      $(".rubyRails").hide();
    } else if (beMostPopular === "no" && beBlogsCorpGov === "yes") {
      $(".keepCalm").hide();
      $(".phpDrupal").fadeIn();
      $(".javaAndroid").hide();
      $(".rubyRails").hide();
    } else if (beBlogsCorpGov === "no" && interactivWeb === "yes") {
      $(".keepCalm").hide();
      $(".rubyRails").fadeIn();
      $(".phpDrupal").hide();
      $(".javaAndroid").hide();
    } else {
      alert("Please fill out the questionaire completely.")
    }

  });
});
