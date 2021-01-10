import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { Post, User } from './entity';

createConnection()
  .then(async (connection: Connection) => {
    const post: Post = new Post('post title', 'post body');
    const user: User = new User('mary', 'dotson', 18);

    const userRepository = connection.manager.getRepository(User);
    const postRepository = connection.manager.getRepository(Post);

    await userRepository.save(user);
    await postRepository.save(post);

    const users: Array<User> = await userRepository.find();
    const posts: Array<Post> = await postRepository.find();

    console.log('all posts:', posts);
    console.log('all users:', users);
  })
  .catch((error) => console.log(error));
