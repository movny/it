// <![CDATA[
(function()
{
  try
  {
    var reCommentId = /(\?|&)showComment=(\d{13})/i;
    if(window.name.indexOf("new-comment-") == 0)  // popup comment editor
    {
      var results = __location.search.match(reCommentId);
      results && (3 == results.length) && (window.name = "new-comment-" + results[2]);
      window.close();  // close popup editor
      return;
    }

    var sPath = __location.pathname, sParams = __location.search, bRedirect = false;
    if(__location.hostname.match(/^program\-think\.blogspot\.(?:\w\w|com\.\w\w|co\.\w\w)$/i))
    {
      sPath = "/ncr" + sPath;
      bRedirect = true;  // Force NCR
    }
    if(sParams.match(reCommentId))
    {
      sParams = sParams.replace(reCommentId, "$1comment=$2");
      bRedirect = true;
    }
    bRedirect && __location.replace("https://it.movny.com" + sPath + sParams);

    window.cookieOptions =
    {
      msg: "本博客架设在 Github 平台, 该博客平台用 cookies 统计用户访问数量; 由于你的访客 IP 来自欧洲国家, 根据欧盟法律要求, 俺必须告知你上述 cookies 的情况",
      learn: "了解更多",
      close: "知道了"
    };
  }
  catch(err)
  {
    console.log(err);
  }
}
)();
// ]]>
