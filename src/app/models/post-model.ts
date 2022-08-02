export class Post {
    title: string;
    body: string;
    author: string;
    createdAt: Date;
    updatedAt?: Date;
    category: string;

    constructor(
        title: string,
        body: string,
        author: string,
        createdAt: Date,
        category: string,
        updatedAt?: Date,
    ) {
        this.title = title
        this.body = body
        this.author = author
        this.category = category
        this.createdAt = createdAt
        this.updatedAt = updatedAt;
    }


}
