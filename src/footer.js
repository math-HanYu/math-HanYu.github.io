const footer = document.createElement('div');

const firstName = "Han";
const familyName = "Yu";
const email = `${firstName}.${familyName}.2@cqu.edu.cn`;

const Room = "理科楼LD301";
const address = "College of Mathematics and Statistics, Center of Mathematics, Chongqing University, Chongqing, 401331, China";


footer.innerHTML = `
<div class="footer">
<p>${address}<br /><br /> Room: ${Room} &nbsp;<br /></p>
<p>Email: ${email}</p>
<div>
<img src="pic/uni_logo.gif" alt="a picture" width="200" height="auto" />
<img src="pic/uni_logo2.bmp" alt="a picture" width="200" height="auto" />
<img src="pic/warwick.png" alt="a picture" width="200" height="auto" />
<img src="pic/CQULogoBlack.svg" alt="a picture" width="200" height="auto" />
</div>
`;

document.body.appendChild(footer);