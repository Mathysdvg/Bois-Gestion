const select = document.getElementById('dept-select');
const btn = document.getElementById('btn-lbc-dynamic');

select.addEventListener('change', function () {
    btn.href = this.value;
});