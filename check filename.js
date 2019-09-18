var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(pic)[1];
        // console.log(ext,"sfsf")
        var arr = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
        if (arr.includes(ext) === false) {
            res.json({ success: false, respomse: "extension not supported" })
        }
        else {
            var edituser = await userService.updateUser({ _id: o_id },
                {
                    $set:
                    {
                        imagefile: pic
                    }
                });
            if (edituser) {
                fs.unlink('./public/profilePics/' + oldImage, (err) => {
                    console.log(err);
                });
            }
            res.json({ success: true, image: pic });
        }
