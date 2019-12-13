
   $(document).ready(function () {
            $("#btnText").click(function () {
                if ($("#Textt").val() == "") {
                    alert("Please Type in A text");
                }
                else {
                    $("#tasks").prepend("<p>" + $("#Textt").val() + "</div>");
                }
            });

        });