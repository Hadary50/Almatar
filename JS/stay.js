function initDropdown(btnId, menuId) {
  const dropdownBtn = document.getElementById(btnId);
  const dropdownMenu = document.getElementById(menuId);
  const dropdownText = dropdownBtn.querySelector('span');
  const dropdownArrow = dropdownBtn.querySelector('i');

  // فتح / غلق القائمة عند الضغط على الزرار
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
    dropdownMenu.style.display = dropdownMenu.classList.contains('show') ? 'block' : 'none';
    dropdownArrow.style.transform = dropdownMenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
  });

  // اختيار عنصر من القائمة
  dropdownMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      const text = item.querySelector('span:first-child').textContent;
      const value = item.querySelector('span:last-child').textContent;
      dropdownText.textContent = `${text} ${value}`;

      dropdownMenu.querySelectorAll('li').forEach(li => li.classList.remove('active'));
      item.classList.add('active');

      dropdownMenu.classList.remove('show');
      dropdownMenu.style.display = 'none';
      dropdownArrow.style.transform = 'rotate(0deg)';
    });
  });

  // إغلاق القائمة عند الضغط خارجها
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show');
      dropdownMenu.style.display = 'none';
      dropdownArrow.style.transform = 'rotate(0deg)';
    }
  });
}

// تفعيل الدروبدون لكل عنصر
initDropdown('dropdownBtn', 'dropdownMenu');
initDropdown('dropdownBtnn', 'dropdownMenuu');
