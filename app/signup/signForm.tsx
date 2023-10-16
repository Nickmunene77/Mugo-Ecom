'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'

type Props = {}

const SignForm = (props: Props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const router = useRouter()

  const Register = () => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
    }
    axios
      .post('/api/register', data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        router.push('/signin')
      })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-extrabold text-center mb-4">Register</h1>
        <label htmlFor="" className="mb-2 font-semibold text-blue-500">
          Name
        </label>
        <input
          type="text"
          className="p-2 border-red-200 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="name"
          value={user.name}
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="" className="mb-2 font-semibold text-blue-500">
          Email
        </label>
        <input
          type="text"
          className="p-2 border-red-200 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="Enter a valid email"
          value={user.email}
          placeholder="Enter an email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="" className="mb-2 font-semibold text-blue-500">
          Password
        </label>
        <input
          type="password"
          className="p-2 border-red-200 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          value={user.password}
          placeholder="Enter a password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={Register}
          className="p-2 border bg-blue-300 text-black font-bold border-purple-500 mt-2 mb-4 rounded-sm focus:outline-none focus:border-gray-600"
        >
          Register Now
        </button>
        <Link
          href="/signin"
          className="text-sm text-center text-purple-300 mt-5 text-neutral-600"
        >
          Already have an Account?{' '}
          <span className="text-amber-300 font-bold">Sign In</span>
        </Link>
        <Link href="/" className="text-center mt-2">
          Home
        </Link>
      </div>
    </div>
  )
}

export default SignForm
