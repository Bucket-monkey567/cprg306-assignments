"use client";

// Part 5: landing page starts
import { useUserAuth } from "./_utils/auth-context";
import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, loading, gitHubSignIn, firebaseSignOut } = useUserAuth();

async function HandleSignIn() {
    try {
        // Sign in to Firebase with GitHub authentication
        await gitHubSignIn();
    } catch (error) {
        console.error("Error signing in: ", error);
    }
}

async function handleSignOut() {
    try {
        // Sign out of Firebase
        await firebaseSignOut();
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}

return (
    <main>
        <h1>Week 9 - Shopping List (Auth)</h1>
        <section>
            {user ? (
                <div>
                    <p className="font-bold p-2">Welcome, {user.displayName} ({user.email}).</p>
                    <button onClick={handleSignOut} className="text-xl font-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Sign Out</button>
                    <br />
                    <Link href="/week-9/shopping-list">
                        <button className="text-xl font-bold m-2 bg-sky-500 border-r-white border-2 rounded-md">Go to Shopping List</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <p className="font-bold p-2">Please sign in.</p>
                    <button onClick={HandleSignIn} className="text-xl font-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Sign In with GitHub</button>
                </div>
            )}
        </section>
    </main>
    );
}
// Part 5: landing page ends