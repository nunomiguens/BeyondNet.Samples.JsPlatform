import {
  Resolver,
  Query,
  Mutation,
  FieldResolver,
  Ctx,
  Arg,
  UseMiddleware,
  Root,
} from "type-graphql";

import { ObjectId } from "mongodb";
import { MyContext } from "../types/MyContext";
import { User, UserModel } from "../entity/User";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { StreamInput } from "../types/StreamInput";
import { isAuth } from "../middleware/isAuth";
import { Stream, StreamModel } from "../entity/Stream";

@Resolver(() => Stream)
export class StreamResolver {
  @Query(() => Stream, { nullable: true })
  stream(@Arg("streamId", () => ObjectIdScalar) streamId: ObjectId) {
    return StreamModel.findById(streamId).lean();
  }

  @Query(() => [Stream])
  @UseMiddleware(isAuth)
  streams(@Ctx() ctx: MyContext) {
    return StreamModel.find({ author: ctx.res.locals.userId }).lean();
  }

  @Mutation(() => Stream)
  @UseMiddleware(isAuth)
  async addStream(
    @Arg("input") streamInput: StreamInput,
    @Ctx() ctx: MyContext
  ): Promise<Stream> {
    const stream = new StreamModel({
      ...streamInput,
      author: ctx.res.locals.userId,
    } as Stream);

    await stream.save();

    return stream;
  }

  @Mutation(() => Stream)
  @UseMiddleware(isAuth)
  async editStream(
    @Arg("input") streamInput: StreamInput,
    @Ctx() ctx: MyContext
  ): Promise<Stream> {
    const { id, title, description, url } = streamInput;

    const stream = await StreamModel.findOneAndUpdate(
      { _id: id, author: ctx.res.locals.userId },
      { title, description, url },
      { runValidators: true, new: true }
    ).lean();

    if (!stream) throw new Error("Stream not found");

    return stream;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteStream(
    @Arg("streamId", () => ObjectIdScalar) streamId: ObjectId,
    @Ctx() ctx: MyContext
  ): Promise<boolean | undefined> {
    const deleted = await StreamModel.findOneAndDelete({
      _id: streamId,
      author: ctx.res.locals.userId,
    }).lean();

    if (!deleted) throw new Error("Stream not found");

    return true;
  }

  @FieldResolver()
  async author(@Root() stream: Stream): Promise<User | null> {
    return await UserModel.findById(stream.author).lean();
  }
}
