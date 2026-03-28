// DOM Elements
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const overlay = document.querySelector('#modalOverlay');
const signupForm = document.querySelector('#signupForm');

// Modal Toggle
const toggleModal = () => {
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
};

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

// Close on background click
overlay.addEventListener('click', (e) => {
    if(e.target === overlay) toggleModal();
});

// Form Submission logic
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate API Call
    const submitBtn = e.target.querySelector('button');
    submitBtn.innerText = "Processing...";
    
    setTimeout(() => {
        alert(`Welcome to The EduCated! Confirmation sent to ${email}`);
        toggleModal();
        submitBtn.innerText = "Sign Up Today";
        e.target.reset();
    }, 1500);
});