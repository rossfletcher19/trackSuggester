$(document).ready(function() {
  $("form#questionaire").submit(function(event) {
    event.preventDefault();
    var interactivWeb = $("input:radio[name=1]:checked").val();
    var simplistic = $("input:radio[name=2]:checked").val();
    var beAndWebApps = $("input:radio[name=3]:checked").val();
    var androidApps = $("input:radio[name=4]:checked").val();
    var beMostPopular = $("input:radio[name=5]:checked").val();
    var beBlogsCorpGov = $("input:radio[name=6]:checked").val();

    $(".rubyRails").hide();
    $(".javaAndroid").hide();
    $(".phpDrupal").hide();

  });
});
