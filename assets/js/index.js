$(function () {
    $('#tbody').on('click', 'td:last-child a:last-child', function () {
        if (confirm('确定是否删除')) {
            let id = $(this).attr('data-id');
            $.ajax({
                type: 'get',
                data: { id },
                url: 'http://127.0.0.1:8080/delHero',
                success: function (res) {
                    alert(res.msg);
                    location.reload();
                }
            })
        }

    })
})