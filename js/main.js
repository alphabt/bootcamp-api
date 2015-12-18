$(function () {
  var ajax_url = "http://serv1.dca.tw:3000/API/bootcamp/articles/";

  // Read
  $.ajax({
    url: ajax_url,
    type: 'GET',
    error: function () {
      console.log('error');
    },
    success: function (records) {
      for (i = 0; i < records.length; i++) {
        $(".result").append(
          '<div class="full-msg" data-id="' + records[i]._id + '">' +
          '<div>Name:' + records[i].username + '<span class="del">刪除留言</span></div>' +
          '<div>Email:' + records[i].email + '</div>' +
          '<div>Title:' + records[i].title + '</div>' +
          '<div>Message:' + records[i].message + '</div>' +
          '</div>'
        );
        //        $.ajax({
        //          url: ajax_url + records[i]._id,
        //          type: 'PUT',
        //          data: {
        //            "title": "<br>🚶<br>➖➖➖➖➖➖➖➖➖➖➖<br>🌵🌾🌵🌴🌵🌾🌵🌾🌵🌴🌵"
        //          }
        //        });
      }
    }
  });

  // Delete
  $(".result").on('click', '.del', function () {
    var fullMsg = $(this).closest('.full-msg');
    var delID = fullMsg.data('id');
    $.ajax({
      url: ajax_url + delID,
      type: 'DELETE',
      error: function () {
        console.log('error')
      },
      success: function (e) {
        console.log(e);
        fullMsg.fadeOut(300, function () {
          $(this).html("DELETED");
        });
      }
    });
  });

  // Delete All
  //  $.ajax({
  //    url: ajax_url,
  //    type: 'GET',
  //    error: function () {
  //      console.log('error');
  //    },
  //    success: function (records) {
  //      for (i = 0; i < records.length; i++) {
  //        $.ajax({
  //          url: ajax_url + records[i]._id,
  //          type: 'DELETE',
  //          error: function () {
  //            console.log('error')
  //          },
  //          success: function (e) {
  //            console.log(e);
  //          }
  //        });
  //      }
  //    }
  //  });

  // Batch Create
  //  var emoji = new EmojiIpsum(1, 3, 2, 5, 2, 3, 100);
  //  for (var i = 0; i < 100; i++) {
  //
  //    $.ajax({
  //      url: ajax_url,
  //      type: 'POST',
  //      data: {
  //        "title": "AAAAAAAAA",
  //        "message": emoji.genHTML(),
  //        "url": "example.org",
  //        "email": "user@example.org",
  //        "username": "user"
  //      }
  //    });
  //  }

  var message = "<script>alert('肚子餓啦！!')</script>";
  // Create
  //  $.ajax({
  //    url: ajax_url,
  //    type: 'POST',
  //    data: {
  //      "title": "AAAAAAAAA",
  //      "message": message,
  //      "url": "example.org",
  //      "email": "user@example.org",
  //      "username": "user"
  //    }
  //  });
});