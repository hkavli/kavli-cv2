var months = [
  "Januar",
  "Februar",
  "Mars",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Desember"
];
var now = new Date();
var thisMonth = months[now.getMonth()];
var output = document.getElementById("output");
console.log(thisMonth);

if (output.textContent != undefined) {
  output.textContent = thisMonth;
} else {
  output.innerText = thisMonth;
}

/* script for collapsible

    <script>
      $(document).ready(function() {
        $("button").on("hide.bs.collapse", function() {
          $(".btn").html('<span class="fas fa-plus"></span> Flere detaljer');
        });
        $("button").on("show.bs.collapse", function() {
          $(".btn").html('<span class="fas fa-minus"></span> Færre detaljer');
        });
      });
    </script>

    */