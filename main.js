const themeToggle = document.querySelector('.theme-toggle');
const body = document.querySelector('body');
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const facultyCards = document.querySelectorAll('.faculty-card');
const modal = document.querySelector('#faculty-modal');
const modalTitle = document.querySelector('#modal-title');
const modalDesc = document.querySelector('#modal-desc');
const closeModal = document.querySelector('.close');

facultyCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        switch (id) {
            case 'prof1':
                modalTitle.textContent = 'Dr. Alice Johnson';
                modalDesc.textContent = 'Specializes in Algebraic Topology.';
                break;
            case 'prof2':
                modalTitle.textContent = 'Dr. Bob Smith';
                modalDesc.textContent = 'Specializes in Applied Mathematics.';
                break;
            case 'prof3':
                modalTitle.textContent = 'Dr. Catherine Lee';
                modalDesc.textContent = 'Specializes in Number Theory.';
                break;
            case 'prof4':
                modalTitle.textContent = 'Dr. David Brown';
                modalDesc.textContent = 'Specializes in Computational Mathematics.';
                break;
            case 'prof5':
                modalTitle.textContent = 'Dr. Emma White';
                modalDesc.textContent = 'Specializes in Mathematical Physics.';
                break;
            case 'prof6':
                modalTitle.textContent = 'Dr. Frank Green';
                modalDesc.textContent = 'Specializes in Statistics.';
                break;
            default:
                modalTitle.textContent = '';
                modalDesc.textContent = '';
        }
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
