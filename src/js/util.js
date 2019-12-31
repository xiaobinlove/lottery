// 获取url中"?"符后的字串
export function getRequest (url) {
  let theRequest =  {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
const OPEN_ID = 'OPEN_ID'
export function setOpenId(id) {
  localStorage.setItem(OPEN_ID, id)
}
export function getOpenId() {
  return localStorage.getItem(OPEN_ID)
}
