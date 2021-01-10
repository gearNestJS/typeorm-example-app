import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { Post, PostCategory, User } from './entity';

createConnection()
  .then(async (connection: Connection) => {
    const userRepository = connection.manager.getRepository(User);
    const postRepository = connection.manager.getRepository(Post);
    const categoryRepository = connection.manager.getRepository(PostCategory);

    const user: User = new User('mary', 'dotson', 18);
    const cat1: PostCategory = new PostCategory('TypeScript');
    const cat2: PostCategory = new PostCategory('Programming');
    const cat3: PostCategory = new PostCategory('Frontend');

    await categoryRepository.save(cat1);
    await categoryRepository.save(cat2);
    await categoryRepository.save(cat3);

    const post1: Post = new Post('post title', 'post body', [cat1, cat2]);
    const post2: Post = new Post(
      'Control flow based type analysis',
      'TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters',
      [cat3]
    );

    await userRepository.save(user);
    await postRepository.save(post1);
    await postRepository.save(post2);

    const users: Array<User> = await userRepository.find();
    const posts: Array<Post> = await postRepository.find();

    console.log('all posts:', posts);
    console.log('all users:', users);
  })
  .catch((error) => console.log(error));
