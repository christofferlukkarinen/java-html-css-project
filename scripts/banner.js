/*
banner is put into #banner-div by java. #banner-div is put on top of every page(body) in HTML code.
 the banner consists of: <image src=background image> <anchor image> </image>. 
 The anchor is an img and is positioned by banner.css on top of the "background" img
 if not done in this way, the anchor image is put into its own block and thus cant be put on top of background img
*/

function bannerFunction() {
  document.querySelector('#banner-div').innerHTML = `
  <image class='banner-image' src='../media/banner.gif'>
   <a class='home-image' href='../main.html'><image src='../media/home-button.png'></a>
  </image>
 
  `;
}

bannerFunction();

//  