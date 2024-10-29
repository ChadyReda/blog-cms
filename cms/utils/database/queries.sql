CREATE TABLE Authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    about TEXT,
    is_admin TINYINT(1),
    status TINYINT(1),
    date_registered DATETIME,
    password VARCHAR(255)
);

CREATE TABLE Posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_published TINYINT(1),
    date_published DATETIME,
    date_edited DATETIME,
    thumbnail VARCHAR(255) DEFAULT('thumbnail.png'),
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);

CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    comment TEXT,
    is_published TINYINT(1),
    date_published DATETIME,
    date_edited DATETIME,
    author_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES Posts(post_id),
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);

CREATE TABLE Replies (
    reply_id INT AUTO_INCREMENT PRIMARY KEY,
    comment_id INT NOT NULL,
    reply TEXT,
    is_published TINYINT(1),
    date_published DATETIME,
    date_edited DATETIME,
    author_id INT NOT NULL,
    FOREIGN KEY (comment_id) REFERENCES Comments(comment_id),
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);

CREATE TABLE PostLikes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    likes TINYINT(1),
    is_published TINYINT(1) DEFAULT(1),
    date_published DATETIME,
    date_edited DATETIME,
    author_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES Posts(post_id),
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);

CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE Tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE PostCategories (
    post_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

CREATE TABLE PostTags (
    post_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);
