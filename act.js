// 슬라이더와 숫자 텍스트 엘리먼트를 가져옵니다.
const slider = document.getElementById('slider1');
const sliderValue = document.getElementById('sliderValue');

// 슬라이더의 값이 변경될 때마다 이벤트를 추가합니다.
slider.addEventListener('input', function() {
    // 슬라이더의 현재 값으로 숫자 텍스트를 업데이트합니다.
    sliderValue.textContent = this.value;
});