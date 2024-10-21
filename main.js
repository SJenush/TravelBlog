document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image').files[0];

    // Create a new blog post element
    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';

    // Create title element
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = title;

    // Create content element
    const blogContent = document.createElement('p');
    blogContent.textContent = content;

    // Create image element if an image was uploaded
    if (imageInput) {
        const blogImage = document.createElement('img');
        blogImage.src = URL.createObjectURL(imageInput);
        blogImage.alt = 'Blog Image';
        blogPost.appendChild(blogImage);
    }

    // Append title and content to the blog post
    blogPost.appendChild(blogTitle);
    blogPost.appendChild(blogContent);

    // Add the new blog post to the blogs container
    document.getElementById('blogsContainer').appendChild(blogPost);

    // Reset the form
    document.getElementById('blogForm').reset();
});
