document.addEventListener('DOMContentLoaded', function () {
  const followBtn = document.getElementById('followBtn');
  followBtn.addEventListener('click', function () {
    if (followBtn.classList.contains('following')) {
      followBtn.classList.remove('following');
      followBtn.textContent = 'Follow';
    } else {
      followBtn.classList.add('following');
      followBtn.textContent = 'Following';
    }
  });
});
