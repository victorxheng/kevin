
import { v } from "convex/values";
import { mutation, action, query, internalQuery } from "./_generated/server";
import { api } from "./_generated/api";
import { filter } from "convex-helpers/server/filter";
import { Id } from "./_generated/dataModel";
import { Auth, DocumentByInfo, GenericDatabaseReader, GenericDatabaseWriter, GenericQueryCtx, GenericTableInfo, PaginationOptions, PaginationResult, QueryInitializer } from "convex/server";
import { useMutation, useQuery } from "convex/react";

import schema, { Users, Tweets, Follows } from "./schema";


async function verify(ctx: GenericQueryCtx<any>){
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to mutation");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .unique();
    if (!user) {
      throw new Error("Unauthenticated call");
    }
}

//returns a full table scan query based on an optional filter
function getManyUsers(db: GenericDatabaseReader<any>, fltr?: (f: typeof Users.doc.type) => Promise<boolean> | boolean): QueryInitializer<any>{return filter(db.query("users"), fltr ? fltr : () => true)}

//returns one document based on an id
async function getOneUsers(db: GenericDatabaseReader<any>, id: string | Id<"users">):  Promise<DocumentByInfo<GenericTableInfo>[]>{return await db.get(id as Id<"users">)}

//returns a full table scan query based on an optional filter
function getManyTweets(db: GenericDatabaseReader<any>, fltr?: (f: typeof Tweets.doc.type) => Promise<boolean> | boolean): QueryInitializer<any>{return filter(db.query("tweets"), fltr ? fltr : () => true)}

//returns one document based on an id
async function getOneTweets(db: GenericDatabaseReader<any>, id: string | Id<"tweets">):  Promise<DocumentByInfo<GenericTableInfo>[]>{return await db.get(id as Id<"tweets">)}

//returns a full table scan query based on an optional filter
function getManyFollows(db: GenericDatabaseReader<any>, fltr?: (f: typeof Follows.doc.type) => Promise<boolean> | boolean): QueryInitializer<any>{return filter(db.query("follows"), fltr ? fltr : () => true)}

//returns one document based on an id
async function getOneFollows(db: GenericDatabaseReader<any>, id: string | Id<"follows">):  Promise<DocumentByInfo<GenericTableInfo>[]>{return await db.get(id as Id<"follows">)}

//creates one document based on data object, returns the resulting document id
async function createOneUsers(db: GenericDatabaseWriter<any>, data: {[x: string]: any;}){return await db.insert("users", data);}

//creates one document based on data object, returns the resulting document id
async function createOneTweets(db: GenericDatabaseWriter<any>, data: {[x: string]: any;}){return await db.insert("tweets", data);}

//creates one document based on data object, returns the resulting document id
async function createOneFollows(db: GenericDatabaseWriter<any>, data: {[x: string]: any;}){return await db.insert("follows", data);}

//updates one document based on an id and a partial data object, returns nothing
async function updateOneUsers(db: GenericDatabaseWriter<any>, id: Id<"users">, data: Partial<any>){await db.patch(id, data);}

//updates one document based on an id and a partial data object, returns nothing
async function updateOneTweets(db: GenericDatabaseWriter<any>, id: Id<"tweets">, data: Partial<any>){await db.patch(id, data);}

//updates one document based on an id and a partial data object, returns nothing
async function updateOneFollows(db: GenericDatabaseWriter<any>, id: Id<"follows">, data: Partial<any>){await db.patch(id, data);}

//deletes one document based on an id, returns nothing
async function deleteOneUsers(db: GenericDatabaseWriter<any>, id: Id<"users">){await db.delete(id);}

//deletes one document based on an id, returns nothing
async function deleteOneTweets(db: GenericDatabaseWriter<any>, id: Id<"tweets">){await db.delete(id);}

//deletes one document based on an id, returns nothing
async function deleteOneFollows(db: GenericDatabaseWriter<any>, id: Id<"follows">){await db.delete(id);}
