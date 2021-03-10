<template>
  <div class="home-banner">
    <div class="home-search">
      <div class="home">
        <input id="search" :placeholder="$t('index.search')" class="search">
        <button class="search-button" style="color: rgb(90, 158, 254);">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAC/CAMAAACYNP00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEEzNjYzODA0MEFGMTFFOTk4N0FBRkY3MkY2MDBFRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEEzNjYzODE0MEFGMTFFOTk4N0FBRkY3MkY2MDBFRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTM2NjM3RTQwQUYxMUU5OTg3QUFGRjcyRjYwMEVENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTM2NjM3RjQwQUYxMUU5OTg3QUFGRjcyRjYwMEVENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjp0jxoAAAAGUExURf///////1V89WwAAAACdFJOU/8A5bcwSgAAAztJREFUeNrs3Uuy6jAMBNDW/jf9hrfqFQmx1K1PEGNAp/MxjokdGOOFzy/Tv6CRp6WA1i7PgAS8MgJy8LIISMNrIiBVz0+AZD07AbLx5ASo4BMToETPS4AiPSsByvScAGDxSZ8S+EMGdQDE9ISTR+snVZYFgLcusdsk85MrKgLAUU9wyaPwa1oM8rfisJDsYp/tF3ZaqOfUSQ1er5f27XhegHvdRCqAGj6tBB5+t2DkgFIFVXxSHdTxKZVQyP9US+FXDr9Gi6GUHy+HWn64IIr5H0pS/Wa9A6CcH6uKen6o7q3frCiAz1/GD5RGC/54v7s4evDd5S/9ZrUBTv1o5kfMbzZjB6AN32d4ib8D36V4h78H/3/HdD+cfrM5OwCdNr9Dglab/5zyBn8j/vEB1M1vv+dvxR/vP+S8zW/j/M02/+H27O7Hb/lt/cn+dofP2Qnc3o/1rz/Lb+tPboDWv/71r3/961//+te//f/1r3/9SeM/O37Yyb/j5+l+G/7/y/7/uH6if+9/WH/Iv/df/bCfcf/evPsn7V3+efffWku/ef17/3wW/63zR8bN37GX+cfNX6veAeH5g8UBwvM3p88/HT9/uWz6O2v+eNkOYM3frwrAWj+hyfoP5vZPX3+jIgB1/ZMG689YyD99/Z/x6y+lBlCsf5UXQLR+WtYSZLL16zKWD1Suv6deffKyAuv40QegLYV7tP4n1HpK+ykPwFzPGvIj9Ewf7f88KKTVB/uf2gT8dfWR00yc6APXjyclZXj3+MNxWVaDGfhqRDcc5fP+AGDs+fhH3QG4z+9wvj8QAIKTz3WWOgNA0nx42hhfAIgaQMc54wpQ9Pwj2gUZdL9B5+2VI0DB87+ol8TM56AQegbnH5D2wyi/1nS/N4JiVEXel2f09SR+zfXIaQD59ax4YE72TJSkkcUuU+68AXr6nwdo6n8coKv/aYC2/od/ozT2Pwowy49R/icBWvsfHELN/V8DdPd/C9De/yVAf/99gAH+2wAT/HcBRvhvAszwX/+SDfFfBpjivwowxn8RYI7/c4BB/o8BJvlz7qvqMa4y+Zp4VAAbHsCGB7DhAWx4ABsdwEb67W/j/xNgAG5qcsG2Y0nZAAAAAElFTkSuQmCC" alt="" style="height: 32px; width: 32px;">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "IndexBanner"
}
</script>

<style scoped>
.search {
  -webkit-box-direction: normal;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,0,0,0);
  word-break: break-all;
  border-radius: 4px 0 0 4px;
  -webkit-appearance: none;
  background-color: #fff;
  border-color: #3e8bf4;
  background-image: none;
  outline: 0;
  transition: border-color .2s;
  width: 751px;
  height: 60px;
  padding-left: 40px;
  color: #333;
  font-size: 18px;
  line-height: 60px;
}
.search-button {
  -webkit-box-direction: normal;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,0,0,0);
  word-break: break-all;
  border-radius: 0 4px 4px 0;
  height: 61px;
  width: 114px;
  outline: 0 none!important;
  border: none;
  background: #3e8bf4;
  cursor: pointer;
  color: rgb(90, 158, 254);
}
.home-search
{
  font-family: microsoft yahei;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,0,0,0);
  word-break: break-all;
  margin-top: 356px;
  display: flex;

}
.home-banner {
  font-family: microsoft yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,0,0,0);
  word-break: break-all;
  width: 100%;
  height: 540px;
  overflow: hidden;
  background-size: cover;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: url(../assets/banner.png) no-repeat;
  background-position-x: center;
}
</style>