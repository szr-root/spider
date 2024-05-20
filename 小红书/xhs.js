require('./env')
require('./source')

var c = '/api/sns/web/v1/homefeed'
var i = {
    "cursor_score": "",
    "num": 31,
    "refresh_type": 1,
    "note_index": 25,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.fashion_v3",
    "search_key": "",
    "need_num": 6,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": false
}

function get_headers(c,i) {
    return window._webmsxyw(c,i)
}

console.log(get_headers(c,i))