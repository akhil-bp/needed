 var re = /(?:\.([^.]+))?$/;
 var ext = re.exec(fileName)[1];
 // console.log(ext,"sfsf")
 var arr = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
 if (arr.includes(ext) === false) {
 res.json({ success: false, respomse: "extension not supported" })
 }
