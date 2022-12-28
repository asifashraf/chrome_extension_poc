const log = console.log;
const print = (msg) => {
  document.getElementById("log").value = msg;
};
console.log(document.querySelector(".markdown"));
jQuery("body").append(`
    <div id="modal" style="display: none;">
      <!-- Modal content goes here -->
    </div>
  `);
jQuery("#modal").css({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "background-color": "white",
  padding: "20px",
  "border-radius": "5px",
});
jQuery("#modal").show();
